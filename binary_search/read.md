# Binary Search

- Binary search is much faster.
- Rather than elminating one element like in linear, you can eliminate half of the remaining at a time.
- Works only on sorted array (Drawback)
- Uses divide and conquer approach

# Psuedo Code
- The function accepts a sorted array and a value.
- Create a left pointer at the start of array, and right at the end of the array.
- While left pointer comes before the right pointer:
   - Create a pointer in the middle.
   - If you find the value you want, return the value
   - if the value is small, move left pointer up
   - If the value is large, move right pointer up

- If you never find the value, return -1

# Big O 
- O(logN) worst and average case
- O(1) Best case

