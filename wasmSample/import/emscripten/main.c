#include <stdio.h>
#include <emscripten.h>

EM_JS(void, say_hello, (), {sayHello(3)});

int main()
{
  emscripten_run_script("sayHello(1)");
  EM_ASM(
      sayHello(2););
  say_hello();
  return 0;
}