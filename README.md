# PACE Project Page

Project page for **PACE: Proprioception-Anchored Cross-Modal Encoder**. The page
is based on the Nerfies/Bulma academic project-page template and uses the
figures already exported from the paper.

The paper is available as [arXiv:2609.07534](https://arxiv.org/abs/2609.07534).

## Preview locally

From this directory, run:

```bash
python3 -m http.server 8000
```

Then open <http://localhost:8000>.

## Media layout

- `teaser.mp4`: animated pipeline overview near the top of the page.
- `data_collection.mp4`: compact simulation-data card in the method section.
- `peginsert.mp4`, `gearmesh.mp4`, `jointassemble.mp4`, and
  `knobtighten.mp4`: labeled task cards in a responsive 2×2 grid.
- `robustness.mp4`: perturbation comparison in the results section.

Short videos play only while visible and remain muted by default. Static paper
figures serve as posters where appropriate.

## Publication resources

The author block, affiliations, scholarly metadata, and BibTeX entry follow the
working paper in `../main.tex`; paper/PDF links point to the current arXiv
record. The code button intentionally remains disabled until a public code
repository URL is available.

> **Repository warning:** this checkout still inherits the original HERO
> template's Git remote. Do not push from this directory as-is. Inspect and
> replace the remote only when a dedicated PACE project-page repository is ready
> for publishing.

## Structure

```text
.
├── index.html
└── static
    ├── css/index.css
    ├── images/
    ├── js/index.js
    └── videos/
```

## Website license

The page retains attribution to the
[Nerfies project-page template](https://github.com/nerfies/nerfies.github.io).
