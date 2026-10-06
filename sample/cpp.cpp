#include <iostream>
#include <vector>

using namespace std;

#define MY_MACRO(a, b) (a * b)

class Rectangle {
    int width;
	int height;
public:
	Rectangle(int x, int y) : width(x), height(y) {}
    int area() { return width * height; }
};

long double operator "" _w(long double);

int main() {
	1.2_w;  //calls operator "" _w(1.2L)

	constexpr auto x = MY_MACRO(1, 2);

	auto rect = Rectangle{3, 4};
	cout << "area: \n" << rect.area();

	std::vector<Rectangle> rects;

	return true ? 0 : 1;
}
