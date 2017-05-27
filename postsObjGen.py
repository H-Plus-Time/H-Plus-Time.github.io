#!/bin/python

import csv,json
if __name__ == "__main__":
    with open("posts.csv", "r") as f:
        rows = list(csv.reader(f))

    with open("posts.json", "w") as f:
        json.dump(map(lambda x: {"src": x[0][1:], "created": x[1], "last_modified": x[2]}, rows), f)