from dotenv import load_dotenv
from agents import Agent, Runner, function_tool
from pathlib import Path

load_dotenv()


@function_tool
def read_file(path: str) -> str:
    """Read a project file."""
    return Path(path).read_text(encoding="utf-8")


@function_tool
def search_files(text: str) -> str:
    """Search the project for matching text."""
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

    return "\n".join(results[:300])


@function_tool
def replace_text(
    path: str,
    old_text: str,
    new_text: str
) -> str:
    """Make one exact small replacement."""

    file_path = Path(path)

    content = file_path.read_text(encoding="utf-8")

    if old_text not in content:
        return f"Text not found in {path}. No change made."

    if content.count(old_text) > 1:
        return (
            f"Text appears multiple times in {path}. "
            "No change made."
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


@function_tool
def create_file(path: str, content: str) -> str:
    """Create a new project file only if it does not already exist."""

    file_path = Path(path)

    if not str(file_path).replace("\\", "/").startswith("src/"):
        return "Refused: new files may only be created inside src/."

    if file_path.exists():
        return f"{path} already exists. No change made."

    file_path.parent.mkdir(
        parents=True,
        exist_ok=True
    )

    file_path.write_text(
        content,
        encoding="utf-8"
    )

    return f"Created {path}"


agent = Agent(
    name="TaxiCyprus SEO Fix Agent",

    instructions="""
You are the implementation agent for TaxiCyprus24.

Your job is to fix SEO, GEO and technical issues found by the audit agent.

You can:

- read files
- search project files
- make small exact replacements
- create new files

SAFETY RULES

- Never rewrite an existing file completely.
- Use replace_text for existing files.
- Use create_file only for genuinely new pages/files.
- Never delete files.
- Never change prices unless verified against the English /pricing page.
- Never invent routes.
- Never invent business information.
- Never invent addresses, opening hours, prices or policies.
- Do not make unsupported SEO claims.
- Preserve existing layout and styling unless explicitly required.
- Prefer small focused changes.
- If something cannot be safely verified, report it instead of changing it.

SEO RULES

- Each page should target one clear search intent.
- Avoid duplicate titles and meta descriptions.
- Use descriptive H1/H2 content.
- Improve internal linking where relevant.
- Keep titles natural and useful.
- Do not keyword-stuff.

GEO RULES

- Make business identity and services explicit.
- Prefer factual, structured content.
- Keep business facts consistent.
- Use schema only with verified information.
- Do not add unsupported claims.

PAGE CREATION RULES

Before creating a route page:

1. Confirm the route exists in the English /pricing page.
2. Confirm the 4-seater price.
3. Check that a dedicated page does not already exist.
4. Follow the structure of the closest existing route page.
5. Add correct metadata.
6. Add internal links where appropriate.
7. Preserve site design.

Always report:

- files created
- files changed
- SEO changes
- GEO changes
- technical fixes
- anything skipped
""",

    tools=[
        read_file,
        search_files,
        replace_text,
        create_file
    ]
)

result = Runner.run_sync(
    agent,
    """
    First read seo_audit.txt.

    Use that audit as your task list.

    Fix only the HIGH priority issues that can be safely verified
    from the repository.

    Do not invent information.
    Do not make unrelated changes.
    """,
    max_turns=40
)

print(result.final_output)