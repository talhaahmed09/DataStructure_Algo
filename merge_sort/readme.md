# Merge Sort

In computer science, merge sort (also commonly spelled mergesort) is an efficient, general-purpose, comparison-based sorting algorithm. Most implementations produce a stable sort, which means that the implementation preserves the input order of equal elements in the sorted output. Mergesort is a divide and conquer algorithm that was invented by John von Neumann in 1945.

An example of merge sort. First divide the list into the smallest unit (1 element), then compare each element with the adjacent list to sort and merge the two adjacent lists. Finally all the elements are sorted and merged.

![Alt text](https://camo.githubusercontent.com/1d3f6508e07151f337fddc8e0e25b3f53fb1abd4cb3cebca16d8333544fc3d99/68747470733a2f2f75706c6f61642e77696b696d656469612e6f72672f77696b6970656469612f636f6d6d6f6e732f632f63632f4d657267652d736f72742d6578616d706c652d33303070782e676966)

A recursive merge sort algorithm used to sort an array of 7 integer values. These are the steps a human would take to emulate merge sort (top-down).

![Alt text](https://camo.githubusercontent.com/09baf033d2b5ffa34f47095070db9d02a410ca598e090e315ae9982ff305b01d/68747470733a2f2f75706c6f61642e77696b696d656469612e6f72672f77696b6970656469612f636f6d6d6f6e732f652f65362f4d657267655f736f72745f616c676f726974686d5f6469616772616d2e737667)

# Psuedo Code

- Break up the array in half, until length of sub array is equal to 1.
- Merge sub arrays with other sorted sub arrays until you get an array equal to the length of the original array.
- Return merged array.

# Time Complexity

![Alt text](image.png)


logN is for splitting * N for merging 

# Space Complexity
- O(n)