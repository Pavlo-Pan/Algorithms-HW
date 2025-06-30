def merge_sort(arr):
    if len(arr) <= 1:
        return arr
    
    mid = len(arr) // 2
    left = merge_sort(arr[:mid])
    right = merge_sort(arr[mid:])
    
    return merge(left, right)

def merge(left, right):
    result = []
    i = j = 0
    
    # сравниваем элементы и добавляем наименьший в result
    while i < len(left) and j < len(right):
        if left[i] <= right[j]:
            result.append(left[i])
            i += 1
        else:
            result.append(right[j])
            j += 1
            
    # добавляем оставшиеся элементы
    result.extend(left[i:])
    result.extend(right[j:])
    
    return result


print(merge_sort([]))                       
print(merge_sort([5]))                       
print(merge_sort([3, 1, 4, 1, 5, 9]))        
print(merge_sort([9, 8, 7, 6, 5, 4]))        
print(merge_sort([2, 2, 2, 2]))              
print(merge_sort([10, -1, 2, 5, 0, 6]))      