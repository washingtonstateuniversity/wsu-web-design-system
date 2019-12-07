import os, sys

path = "/Users/nicdford/Downloads/Icons-new"
arr = os.listdir(path)

print(arr)

# for i in arr:

# 	oldPath = i

# 	if i[-8:] == '-lht.svg' :
# 		os.remove(oldPath)

# 	elif i[-8:] == '-drk.svg' :
# 		i = i.split('-drk')
# 		i = 'icon-' + i[0] + i[1]
# 		os.rename(oldPath, i)

# 	elif i[-4:] == '.svg' :
# 		i = 'icon-' + i
# 		os.rename(oldPath, i)

# 	else :
# 		continue
