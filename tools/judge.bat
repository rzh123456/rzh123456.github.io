@echo off
set prob=add
for /l %%i in (1,1,10) do (
    type %prob%%%i.in > %prob%.in
    %prob%.exe
    type %prob%.out > %prob%%%i.out
    fc %prob%%%i.out %prob%%%i.ans
)
pause