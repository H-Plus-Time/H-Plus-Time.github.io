#!/bin/bash

POSTS=$(find . -name '*.md')
rm posts.csv
for x in $POSTS;
do
echo "$x,$(git log -1 --date=unix --format=%cd $x)" >> posts.csv;
done
