while :; do clear; 
   TEMP=$(/Applications/Stats.app/Contents/Resources/smc list -t | grep TC0F);
   MYDATE=date
   OUTPUT=$MYDATE,$TEMP
   echo $OUTPUT
   echo $OUTPUT >> data.csv
sleep 2; done
 
