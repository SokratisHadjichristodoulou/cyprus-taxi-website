from agents import Agent, Runner, function_tool
from pathlib import Path
from dotenv import load_dotenv

load_dotenv()


@function_tool
def read_file(path: str) -> str:
    """Read a file from the website project."""
    return Path(path).read_text(encoding="utf-8")


@function_tool
def search_files(text: str) -> str:
    """Search the project for text and return matching lines with filenames."""
    results = []

    for file in Path(".").rglob("*"):
        if (
            file.is_file()
            and ".venv" not in file.parts
            and ".git" not in file.parts
            and "node_modules" not in file.parts
        ):
            try:
                content = file.read_text(encoding="utf-8")

                for line_number, line in enumerate(
                    content.splitlines(),
                    start=1
                ):
                    if text.lower() in line.lower():
                        results.append(
                            f"{file}:{line_number}: {line.strip()}"
                        )

            except Exception:
                pass

    return "\n".join(results[:200])


@function_tool
def replace_text(
    path: str,
    old_text: str,
    new_text: str
) -> str:
    """
    Replace exactly one matching piece of text in a project file.

    The replacement is refused if:
    - the old text does not exist
    - the old text appears more than once
    """

    file_path = Path(path)

    content = file_path.read_text(encoding="utf-8")

    if old_text not in content:
        return f"Text not found in {path}. No changes made."

    count = content.count(old_text)

    if count > 1:
        return (
            f"Text appears {count} times in {path}. "
            "No changes made because the replacement is ambiguous."
        )

    updated = content.replace(
        old_text,
        new_text,
        1
    )

    file_path.write_text(
        updated,
        encoding="utf-8"
    )

    return f"Updated {path}"


agent = Agent(
    name="TaxiCyprus Website Manager",

    instructions="""
You are the AI website manager for TaxiCyprus24.

You are working inside the real TaxiCyprus24 source-code repository.

AVAILABLE TOOLS

You can:
- read project files
- search through project files
- make small exact text replacements

SAFETY RULES

- Never rewrite an entire file.
- Never delete large sections of code.
- Never restructure a component unless explicitly instructed.
- Use replace_text only for small exact replacements.
- Before changing something, read the relevant file first.
- Verify the old text in context before replacing it.
- If the text appears more than once, do not guess.
- If something is ambiguous, leave it unchanged and report it.
- Never invent prices.
- Never invent routes.
- Never change unrelated code.
- Never edit a file outside the files explicitly allowed by the task.
- Preserve existing formatting, styling, translations and functionality.
- Prefer no change over an uncertain change.

PRICING RULES

The English /pricing page is the ONLY source of truth for transfer prices.

When checking prices:

1. Match routes using both origin and destination.
2. Use the 4-seater price only.
3. Do not match routes based only on a similar name.
4. Do not assume two routes are equivalent.
5. Do not use a price from another route.
6. If the route is not clearly present in /pricing, do not invent a price.
7. If replacing a route with another valid pricing-table route,
   make sure the new route does not already exist on the same page.

LANGUAGE RULES

English pages must use English.
Greek pages must use Greek.
Russian pages must use Russian.

Keep translations natural and preserve all unrelated translated content.

Always finish by reporting:
- files changed
- exact text replaced
- old value
- new value
- anything left unresolved
""",

    tools=[
        read_file,
        search_files,
        replace_text
    ]
)


result = Runner.run_sync(
    agent,
    """
    Audit the TaxiCyprus24 website for SEO, GEO, and technical issues.

    Main business goal:
    Increase visibility and traffic for Paphos-related searches.

    Focus on:

    1. Paphos SEO
       - Paphos Airport transfers
       - Paphos to Coral Bay
       - Paphos to Peyia
       - Paphos to Chloraka
       - Paphos to Limassol
       - Paphos to Larnaca
       - Paphos to Nicosia

    2. Technical SEO
       - broken links
       - soft 404 risks
       - missing pages
       - incorrect redirects
       - canonical problems
       - sitemap problems
       - accidental noindex
       - duplicate titles/descriptions
       - weak internal linking

    3. On-page SEO
       - title tags
       - meta descriptions
       - H1/H2 structure
       - page intent
       - keyword relevance
       - local relevance
       - duplicate or thin content

    4. GEO / AI search visibility
       - clear business identity
       - location/service descriptions
       - structured factual content
       - FAQ opportunities
       - schema markup
       - local entity clarity

    5. Structured data
       - LocalBusiness
       - TaxiService
       - FAQ where appropriate
       - route/service information

    Rules:
    - Do not edit anything.
    - Only audit and report.
    - Prioritize findings as:
      HIGH
      MEDIUM
      LOW
    - For each issue say:
      file/page
      problem
      why it matters
      recommended fix
    """,
    max_turns=30
)


print(result.final_output)
Path("seo_audit.txt").write_text(
    result.final_output,
    encoding="utf-8"
)