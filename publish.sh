SHA=`git rev-parse HEAD`
git checkout gh-pages && \
sh build.sh &&\
git add --all &&\
git commit -m "Update from $SHA" &&\
git push origin gh-pages &&\
git checkout master
