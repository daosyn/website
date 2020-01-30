TARGETS:= clean posts home

all: $(TARGETS)

# temporary
clean:
	rm -rf dist/*

posts:
	hugo -s ./blog -d ../dist/blog

home:
	npm run build
	cp public/style.css dist/
	cp public/index.html dist/
	cp -r static/* dist/
# ideally, this makefile will build the hugo static blog site (from blog) into public/blog
# then use webpack to build the js for the root home page (from src)
# publish public as a github page
