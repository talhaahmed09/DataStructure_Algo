# Naive String Search

-   Suppose you want to count the number of times a sub string appears in a string

-   A straight forward approach involves checking pairs of characters individually

# Example
- Long String: 
    - wowowmgzomg

- Short String:
    -- omg

# Psuedo Code

- Loop over the string
- Loop over the sub string
- If the characters dont match, break out of inner loop
- If you complete the inner loop and find a match, increment the count of matches.
- Return the count