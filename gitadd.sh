#!/bin/bash
read -p "Git comment: " INPUT
echo Recieved: $INPUT
git add -A
git commit -m "$INPUT"
pit push origin main
