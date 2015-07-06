echo "Regenerating spec and data directories..."

cd `dirname $0`
rm -rf _spec _data
cp -R build/_spec .
cp -R build/_data .
