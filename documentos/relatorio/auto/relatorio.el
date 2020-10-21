(TeX-add-style-hook
 "relatorio"
 (lambda ()
   (TeX-add-to-alist 'LaTeX-provided-class-options
                     '(("article" "11pt")))
   (TeX-add-to-alist 'LaTeX-provided-package-options
                     '(("inputenc" "utf8") ("fontenc" "T1") ("ulem" "normalem")))
   (add-to-list 'LaTeX-verbatim-macros-with-braces-local "href")
   (add-to-list 'LaTeX-verbatim-macros-with-braces-local "hyperref")
   (add-to-list 'LaTeX-verbatim-macros-with-braces-local "hyperimage")
   (add-to-list 'LaTeX-verbatim-macros-with-braces-local "hyperbaseurl")
   (add-to-list 'LaTeX-verbatim-macros-with-braces-local "nolinkurl")
   (add-to-list 'LaTeX-verbatim-macros-with-braces-local "url")
   (add-to-list 'LaTeX-verbatim-macros-with-braces-local "path")
   (add-to-list 'LaTeX-verbatim-macros-with-delims-local "path")
   (TeX-run-style-hooks
    "latex2e"
    "article"
    "art11"
    "inputenc"
    "fontenc"
    "graphicx"
    "grffile"
    "longtable"
    "wrapfig"
    "rotating"
    "ulem"
    "amsmath"
    "textcomp"
    "amssymb"
    "capt-of"
    "hyperref")
   (LaTeX-add-labels
    "sec:org5819814"
    "sec:orgeba2245"
    "sec:org1b5e27d"
    "sec:org369fa64"
    "sec:org052c70e"
    "sec:orgc29ddcb"
    "sec:orgdbe7f3a"
    "sec:org1f21af1"
    "sec:orga4bf67f"
    "sec:org0be1379"
    "sec:org00aa07c"
    "sec:org7d02422"
    "sec:orgd111e76"
    "sec:org408824f"
    "sec:org206f0e1"
    "fig:orgeed86d0"
    "fig:orgc93e165"
    "fig:org5f41d10"
    "fig:orga2241d3"
    "fig:org29d7f02"
    "fig:org38e76da"
    "fig:org21f627b"
    "fig:org24e3be8"
    "fig:orga7abf63"
    "fig:orga815c4e"
    "fig:orge13ee2e"
    "fig:org5cccb6b"
    "fig:orgd20b23b"
    "fig:org1e98e17"
    "fig:org7c089d5"))
 :latex)

