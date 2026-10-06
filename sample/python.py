# Solve the quadratic equation ax**2 + bx + c = 0

# import complex math module
import cmath

class Point:
	def __init__(self, x, y, z):
		self.x = x
		self.y = y
		self.z = z

a = 1
b = 5
c = 6

# calculate the discriminant
d = (b ** 2) - (4 * a * c)

# find two solutions
sol1 = (-b - cmath.sqrt(d)) / (2*a)
sol2 = (-b + cmath.sqrt(d)) / (2*a)

print('The solutions are {0} and {1}'.format(sol1, sol2))

if True:
	print(a, b, c)
else:
	while True:
		pass
