cd ./css 
cat *.css > ./min/style.css;
cd  ./min;
minify style.css;
cd ./../../js;
cat jquery.min.js > ./min/script.js;
cat extra.js jquery.scrolly.min.js main.js skel.min.js typed.js util.js >> ./min/script.js
cd ./min;
minify script.js