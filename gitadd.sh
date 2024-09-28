#!/bin/bash
# Small commandline script for a GitHub upload
read -p "Git comment: " INPUT
echo Recieved: $INPUT
git add -A
git commit -m "$INPUT"
git push origin main
