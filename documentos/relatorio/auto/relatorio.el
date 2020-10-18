(TeX-add-style-hook
 "relatorio"
 (lambda ()
   (TeX-add-to-alist 'LaTeX-provided-class-options
                     '(("article" "11pt")))
   (TeX-add-to-alist 'LaTeX-provided-package-options
                     '(("inputenc" "utf8") ("fontenc" "T1") ("ulem" "normalem")))
   (add-to-list 'LaTeX-verbatim-macros-with-braces-local "path")
   (add-to-list 'LaTeX-verbatim-macros-with-braces-local "url")
   (add-to-list 'LaTeX-verbatim-macros-with-braces-local "nolinkurl")
   (add-to-list 'LaTeX-verbatim-macros-with-braces-local "hyperbaseurl")
   (add-to-list 'LaTeX-verbatim-macros-with-braces-local "hyperimage")
   (add-to-list 'LaTeX-verbatim-macros-with-braces-local "hyperref")
   (add-to-list 'LaTeX-verbatim-macros-with-braces-local "href")
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
    "sec:org13c5931"
    "sec:orge2e1aff"
    "sec:org0ed0886"
    "sec:org7c276e6"
    "sec:org452b0f8"
    "sec:orgd6684ed"
    "sec:org2b6dc58"
    "sec:orgd49d045"
    "sec:org3c8b941"
    "sec:org9851101"
    "fig:orgfec7284"
    "fig:org6764ceb"
    "fig:org4073d11"
    "fig:orgf88595a"
    "fig:orgebfee3e"
    "fig:org0c8bd42"
    "fig:org274f406"
    "fig:org40e7a11"
    "fig:org38c1d2b"
    "fig:orgca19a8e"
    "fig:org995b752"
    "fig:org40c65be"
    "fig:orge0254ae"
    "fig:org015ea92"))
 :latex)

