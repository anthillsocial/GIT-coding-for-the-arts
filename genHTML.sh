HTML=index.html 
echo "<!DOCTYPE html><html><head>" > $HTML
echo "<style>" >> $HTML
echo "body{font-family: Verdana, Geneva, Tahoma, sans-serif;}" >> $HTML
echo ".flex-container{display:flex;flex-wrap:wrap;justify-content: center;}" >> $HTML
echo ".flex-container>div{flex: 1 0 21%;background-color:#f1f1f1;margin:10px;font-size:30px;height:250px;flex-grow:1;overflow:hidden;text-align:center;}" >> $HTML
echo ".flex-container a{display:block;height:100%;padding:10px;padding-top:70px;text-decoration:none;}" >> $HTML
echo ".flex-container a:hover{background-color:#818181;}" >> $HTML
echo "</style></head><body>"  >> $HTML
echo "<h1>p5.js code examples & resources</h1>" >> $HTML
echo "<p>From this <a href=\"https://github.com/anthillsocial/GIT-coding-for-the-arts\">GIT-coding-for-the-arts repository</a></p>" >> $HTML
echo "<div class=\"flex-container\">" >> $HTML
for i in $(find . -name 'index.html'); do # Not recommended, will break on whitespace
    TXT=$(sed -r 's/.resources//' <<< "$i")
    TXT=$(sed -r 's/.\///' <<< "$TXT")
    TXT=$(sed -r 's/.index.html//' <<< "$TXT")
    TXT=$(sed -r 's/\//<br>/' <<< "$TXT")
    echo "<div><a href=\"$i\">$TXT</a></div>" >> $HTML
done
echo "</div></body></html>" >> $HTML