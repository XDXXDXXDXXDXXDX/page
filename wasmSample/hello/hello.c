#include <stdio.h>
#include <emscripten.h>

int main()
{
  printf("Hello World\n");
  return 0;
}

EMSCRIPTEN_KEEPALIVE int sum(int a, int b)
{
  return a + b;
}