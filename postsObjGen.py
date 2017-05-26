#!/bin/python

import csv,json
if __name__ == "__main__":
    with open("posts.csv", "r") as f:
        rows = list(csv.reader(f))

    with open("posts.json", "w") as f:
        json.dump(map(lambda x: {"src": x[0][1:], "time": x[1]}, rows), f)