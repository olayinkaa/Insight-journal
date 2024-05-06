# What is algorithm
A process or set of steps to accomplish a certain task

# Algorithms: Implement Selection Sort
Selection sort works by selecting the minimum value in a list and swapping it with the first valuue in the list. 
It then starts at the second position, selects the smallest value in the remaining list and swaps it with the second element.
It continues iterating through the list and swapping elements until it reaches the end of the list. Now the list is sorted.
Selection sort has quadratic time complexity in all cases.

# Big O Shorthands
1. Arithmetic operations are constant
2. Variable assignment is constant
3. Accessing elements in an array( by index) or object(by key) is constant
4. In a loop, the complexity is the length of the loop times the complexity of whatever happens inside of the loop.

# Space Complexity
Auxiliary space complexity to refer to space required by the algorithm, not including space taken up by the inputs.

- Most primitives (booleans, numbersm undefined, null) are constant space
- strings require 0(n) space (where n is the string length)
- Reference types are generally 0(n), where n is the length(for arrays) ir the number of keys(for objects)

# Big 0 of Objects
- insertion  0(1)
- Removal 0(1)
- Searching 0(n)
- Access 0(1)
- Object.keys 0(n)
- Object.values 0(n)
- Object.entries 0(n)
- hasOwnProperty 0(n)

# Big 0 of Array Operations
- push 0(1)
- pop 0(1)
- shift 0(n)
- unshift 0(n)
- concat 0(n)
- slice 0(n)
- splice 0(n)
- sort 0(n * log n)
- forEach, map, filter, reduce 0(n)

# How to improve
1. devise a plan for solving problems
2. Master common problem solving patterns

# Proble solving approach
1. Understand the problem
2. Explore concrete examples
3. Break it down
4. Solve/Simplify
5. Look back and refactor


# Anagrams
Is a word, phrase, or name formed by rearranging the letters of another such as cinema formed from iceman


# Multiple pointer
Creating pointers or values that correspond to an index or position and move towards the beginning, end or middle based on a certain condition

very efficient for solving problems with minimal space complexity as well.