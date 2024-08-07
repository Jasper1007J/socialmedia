#!/bin/bash

# Simple Interest Calculator

# Prompt user for input
echo "Enter the principal amount:"
read principal

echo "Enter the rate of interest (as a percentage):"
read rate

echo "Enter the time period (in years):"
read time

# Calculate simple interest
simple_interest=$(echo "scale=2; ($principal * $rate * $time) / 100" | bc)

# Display the result
echo "The Simple Interest is: $simple_interest"

#Make the script executable
chmod +x simple.interest.sh

#Run the Script
./simple-interest.sh
