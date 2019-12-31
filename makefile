all:
	hugo
# ideally, this makefile will build the hugo static blog site (from blog) into public/blog
# then use webpack to build the js for the root home page (from src)
# publish public as a github page
