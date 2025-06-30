import heapq

def merge_sorted_files(file_list, output_file):
    sorted_lists = []
    
    for filename in file_list:
        with open(filename, 'r') as f:
            numbers = list(map(int, f.read().split()))
            sorted_lists.append(numbers)
    
    # Объединяем все списки в один отсортированный
    merged = list(heapq.merge(*sorted_lists))
    
    with open(output_file, 'w') as out:
        out.write(' '.join(map(str, merged)))
# Пример использования
files = ['sorted1.txt', 'sorted2.txt', 'sorted3.txt']
merge_sorted_files(files, 'merged_output.txt')
