library(webshot)
install_phantomjs(force = TRUE)
path="/Users/barry/Documents/GitHub/quinnference_website/content/slides/teaching/ati/"

webshot(paste0(path,"Lecture-1.html"),paste0(path,"Lecture-1.pdf"))

# system("cd /Users/barry/Documents/GitHub/quinnference_website/content/slides/teaching/ati/")
# system("decktape remark Lecture-1.html  Lecture-1.pdf")


install.packages(c("pagedown", "xaringan"))
# make sure you have pagedown >= 0.2 and xaringan >= 0.9; if not, run
remotes::install_github(c('rstudio/pagedown', 'yihui/xaringan'))

pagedown::chrome_print(paste0(path,"Lecture-1.Rmd"))

# or just pass the HTML output file path to chrome_print()
pagedown::chrome_print(paste0(path,"Lecture-1.html"))

xaringan::decktape(paste0(path,"Lecture-1.html"),paste0(path,"Lecture-1.pdf"),open = TRUE)
