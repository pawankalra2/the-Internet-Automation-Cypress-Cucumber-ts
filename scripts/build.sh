#!/bin/bash

#find ./cypress/integration/ -iname '*.feature' -exec ln -s '{}' ./features/ \;
rm -rf ./features/*
find ./cypress/integration/ -type f \( -name "*.feature" \) -exec cp '{}' ./features/ \;
