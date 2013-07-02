git checkout master
if [ $? -ne 0 ] ; then
	echo "You must commit before going to prod"
	exit 1
fi

#rm app/*.js
#mv build-for-copy/app/* app/
mv build/app/* app/
mv build/app/css/* app/css/
mv build/app/js/data/* app/js/data
cp -r build/app/media/*  app/media/

#git commit .
vi package.json