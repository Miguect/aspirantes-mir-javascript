# aspirantes-mir-javascript
PS C:\Users\Migue y Chris\Desktop\Ejercicios> cd aspirantes-mir-javascript
PS C:\Users\Migue y Chris\Desktop\Ejercicios\aspirantes-mir-javascript> git status
On branch develop
Untracked files:
  (use "git add <file>..." to include in what will be committed)
        js-1/

nothing added to commit but untracked files present (use "git add" to track)
PS C:\Users\Migue y Chris\Desktop\Ejercicios\aspirantes-mir-javascript> cd js-1
PS C:\Users\Migue y Chris\Desktop\Ejercicios\aspirantes-mir-javascript\js-1> node conditional.js
El color es black
El color es blanco
El color es rojo
El color es undefined
PS C:\Users\Migue y Chris\Desktop\Ejercicios\aspirantes-mir-javascript\js-1> node conditional.js
El color es negro
El color es blanco
El color es azul
El color es undefined
PS C:\Users\Migue y Chris\Desktop\Ejercicios\aspirantes-mir-javascript\js-1> node conditional.js
El color es negro
El color es blanco
El color es azul
El color es verde
PS C:\Users\Migue y Chris\Desktop\Ejercicios\aspirantes-mir-javascript\js-1> node sum.js
C:\Users\Migue y Chris\Desktop\Ejercicios\aspirantes-mir-javascript\js-1\sum.js:7
    return "El resultado de la suma es: " + i
                                            ^

ReferenceError: i is not defined
    at sum ?[90m(C:\Users\Migue y Chris\Desktop\Ejercicios\aspirantes-mir-javascript\js-1\?[39msum.js:7:45?[90m)?[39m
    at Object.<anonymous> ?[90m(C:\Users\Migue y Chris\Desktop\Ejercicios\aspirantes-mir-javascript\js-1\?[39msum.js:11:13?[90m)?[39m
?[90m    at Module._compile (node:internal/modules/cjs/loader:1254:14)?[39m
?[90m    at Module._extensions..js (node:internal/modules/cjs/loader:1308:10)?[39m
?[90m    at Module.load (node:internal/modules/cjs/loader:1117:32)?[39m
?[90m    at Module._load (node:internal/modules/cjs/loader:958:12)?[39m
?[90m    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:81:12)?[39m
?[90m    at node:internal/main/run_main_module:23:47?[39m

Node.js v18.15.0
PS C:\Users\Migue y Chris\Desktop\Ejercicios\aspirantes-mir-javascript\js-1> node sum.js
El resultado de la suma es: 0
El resultado de la suma es: 0
El resultado de la suma es: 0
PS C:\Users\Migue y Chris\Desktop\Ejercicios\aspirantes-mir-javascript\js-1> node sum.js
El resultado de la suma es: 7
El resultado de la suma es: 15
El resultado de la suma es: 15
PS C:\Users\Migue y Chris\Desktop\Ejercicios\aspirantes-mir-javascript\js-1> node sum.js
El resultado de la suma es: 4
El resultado de la suma es: 10
El resultado de la suma es: 15
PS C:\Users\Migue y Chris\Desktop\Ejercicios\aspirantes-mir-javascript\js-1> node sum.js
El resultado de la suma es: 6
El resultado de la suma es: 45
El resultado de la suma es: 105
PS C:\Users\Migue y Chris\Desktop\Ejercicios\aspirantes-mir-javascript\js-1> node sum.js
El resultado de la suma es: 10
El resultado de la suma es: 55
El resultado de la suma es: 120
PS C:\Users\Migue y Chris\Desktop\Ejercicios\aspirantes-mir-javascript\js-1> cd..
PS C:\Users\Migue y Chris\Desktop\Ejercicios\aspirantes-mir-javascript> git add .
PS C:\Users\Migue y Chris\Desktop\Ejercicios\aspirantes-mir-javascript> git commit -m "Solución a los ejercicios de js"
[develop 205421d] Solución a los ejercicios de js
 4 files changed, 48 insertions(+)
 create mode 100644 js-1/IMC.js
 create mode 100644 js-1/conditional.js
 create mode 100644 js-1/hello.js
 create mode 100644 js-1/sum.js
PS C:\Users\Migue y Chris\Desktop\Ejercicios\aspirantes-mir-javascript> git checkout main
Switched to branch 'main'
Your branch is up to date with 'origin/main'.
PS C:\Users\Migue y Chris\Desktop\Ejercicios\aspirantes-mir-javascript> git merge develop
Updating 07a8d63..205421d
Fast-forward
 js-1/IMC.js         |  7 +++++++
 js-1/conditional.js | 20 ++++++++++++++++++++
 js-1/hello.js       |  7 +++++++
 js-1/sum.js         | 14 ++++++++++++++
 4 files changed, 48 insertions(+)
 create mode 100644 js-1/IMC.js
 create mode 100644 js-1/conditional.js
 create mode 100644 js-1/hello.js
 create mode 100644 js-1/sum.js
PS C:\Users\Migue y Chris\Desktop\Ejercicios\aspirantes-mir-javascript> git remote add origin https://github.com/Miguect/aspirantes-mir-javascript.git
error: remote origin already exists.
PS C:\Users\Migue y Chris\Desktop\Ejercicios\aspirantes-mir-javascript> git push -u origin main
Enumerating objects: 8, done.
Counting objects: 100% (8/8), done.
Delta compression using up to 2 threads
Compressing objects: 100% (7/7), done.
Writing objects: 100% (7/7), 1.02 KiB | 41.00 KiB/s, done.
Total 7 (delta 0), reused 0 (delta 0), pack-reused 0
To https://github.com/Miguect/aspirantes-mir-javascript.git
   07a8d63..205421d  main -> main
Branch 'main' set up to track remote branch 'main' from 'origin'.
PS C:\Users\Migue y Chris\Desktop\Ejercicios\aspirantes-mir-javascript> git branch -d develop
Deleted branch develop (was 205421d).
PS C:\Users\Migue y Chris\Desktop\Ejercicios\aspirantes-mir-javascript>

?[90m    at Module.load (node:internal/modules/cjs/loader:1117:32)?[39m
?[90m    at Module._load (node:internal/modules/cjs/loader:958:12)?[39m
?[90m    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:81:12)?[39m
?[90m    at node:internal/main/run_main_module:23:47?[39m

Node.js v18.15.0
PS C:\Users\Migue y Chris\Desktop\Ejercicios\aspirantes-mir-javascript\js-2> node maxIndex.js
undefined
undefined
undefined
PS C:\Users\Migue y Chris\Desktop\Ejercicios\aspirantes-mir-javascript\js-2> node maxIndex.js
C:\Users\Migue y Chris\Desktop\Ejercicios\aspirantes-mir-javascript\js-2\maxIndex.js:2
    return maxIndex.indexOf(3)
                    ^

TypeError: maxIndex.indexOf is not a function
    at maxIndex ?[90m(C:\Users\Migue y Chris\Desktop\Ejercicios\aspirantes-mir-javascript\js-2\?[39mmaxIndex.js:2:21?[90m)?[39m
    at Object.<anonymous> ?[90m(C:\Users\Migue y Chris\Desktop\Ejercicios\aspirantes-mir-javascript\js-2\?[39mmaxIndex.js:5:13?[90m)?[39m
?[90m    at Module._compile (node:internal/modules/cjs/loader:1254:14)?[39m
?[90m    at Module._extensions..js (node:internal/modules/cjs/loader:1308:10)?[39m
?[90m    at Module.load (node:internal/modules/cjs/loader:1117:32)?[39m
?[90m    at Module._load (node:internal/modules/cjs/loader:958:12)?[39m
?[90m    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:81:12)?[39m
?[90m    at node:internal/main/run_main_module:23:47?[39m

Node.js v18.15.0
PS C:\Users\Migue y Chris\Desktop\Ejercicios\aspirantes-mir-javascript\js-2> node maxIndex.js
C:\Users\Migue y Chris\Desktop\Ejercicios\aspirantes-mir-javascript\js-2\maxIndex.js:2
    return maxIndex.indexOf(3)
                    ^

TypeError: maxIndex.indexOf is not a function
    at maxIndex ?[90m(C:\Users\Migue y Chris\Desktop\Ejercicios\aspirantes-mir-javascript\js-2\?[39mmaxIndex.js:2:21?[90m)?[39m
    at Object.<anonymous> ?[90m(C:\Users\Migue y Chris\Desktop\Ejercicios\aspirantes-mir-javascript\js-2\?[39mmaxIndex.js:5:13?[90m)?[39m
?[90m    at Module._compile (node:internal/modules/cjs/loader:1254:14)?[39m
?[90m    at Module._extensions..js (node:internal/modules/cjs/loader:1308:10)?[39m
?[90m    at Module.load (node:internal/modules/cjs/loader:1117:32)?[39m
?[90m    at Module._load (node:internal/modules/cjs/loader:958:12)?[39m
?[90m    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:81:12)?[39m
?[90m    at node:internal/main/run_main_module:23:47?[39m

Node.js v18.15.0
PS C:\Users\Migue y Chris\Desktop\Ejercicios\aspirantes-mir-javascript\js-2> node maxIndex.js
1
-1
-1
PS C:\Users\Migue y Chris\Desktop\Ejercicios\aspirantes-mir-javascript\js-2> node maxIndex.js
1
10
-1
PS C:\Users\Migue y Chris\Desktop\Ejercicios\aspirantes-mir-javascript\js-2> node maxIndex.js
1
0
-1
PS C:\Users\Migue y Chris\Desktop\Ejercicios\aspirantes-mir-javascript\js-2> node join.js
minombreesMiguelAndrésCamargo
PS C:\Users\Migue y Chris\Desktop\Ejercicios\aspirantes-mir-javascript\js-2> node join.js
mi nombre es Miguel Andrés Camargo
PS C:\Users\Migue y Chris\Desktop\Ejercicios\aspirantes-mir-javascript\js-2> cd..
PS C:\Users\Migue y Chris\Desktop\Ejercicios\aspirantes-mir-javascript> git add .
PS C:\Users\Migue y Chris\Desktop\Ejercicios\aspirantes-mir-javascript> git commit -m "solucion a los ejercicios de js"
[develop c88d7d0] solucion a los ejercicios de js
 5 files changed, 153 insertions(+), 1 deletion(-)
 rewrite README.md (100%)
 create mode 100644 js-2/join.js
 create mode 100644 js-2/max.js
 create mode 100644 js-2/maxIndex.js
 create mode 100644 js-2/sum.js
PS C:\Users\Migue y Chris\Desktop\Ejercicios\aspirantes-mir-javascript> git branch
* develop
  main
PS C:\Users\Migue y Chris\Desktop\Ejercicios\aspirantes-mir-javascript> git checkout main
Switched to branch 'main'
Your branch is up to date with 'origin/main'.
PS C:\Users\Migue y Chris\Desktop\Ejercicios\aspirantes-mir-javascript> git merge develop
Updating files: 100% (5/5), done.
Updating 205421d..c88d7d0
Fast-forward
 README.md        | 101 ++++++++++++++++++++++++++++++++++++++++++++++++++++++-
 js-2/join.js     |  10 ++++++
 js-2/max.js      |  17 ++++++++++
 js-2/maxIndex.js |  14 ++++++++
 js-2/sum.js      |  12 +++++++
 5 files changed, 153 insertions(+), 1 deletion(-)
 create mode 100644 js-2/join.js
 create mode 100644 js-2/max.js
 create mode 100644 js-2/maxIndex.js
 create mode 100644 js-2/sum.js
PS C:\Users\Migue y Chris\Desktop\Ejercicios\aspirantes-mir-javascript> git branch -d develop
Deleted branch develop (was c88d7d0).
PS C:\Users\Migue y Chris\Desktop\Ejercicios\aspirantes-mir-javascript> git status
On branch main
Your branch is ahead of 'origin/main' by 1 commit.
  (use "git push" to publish your local commits)

nothing to commit, working tree clean
PS C:\Users\Migue y Chris\Desktop\Ejercicios\aspirantes-mir-javascript> git push -u origin main
Enumerating objects: 10, done.
Counting objects: 100% (10/10), done.
Delta compression using up to 2 threads
Compressing objects: 100% (8/8), done.
Writing objects: 100% (8/8), 2.23 KiB | 190.00 KiB/s, done.
Total 8 (delta 0), reused 0 (delta 0), pack-reused 0
To https://github.com/Miguect/aspirantes-mir-javascript.git
   205421d..c88d7d0  main -> main
Branch 'main' set up to track remote branch 'main' from 'origin'.
PS C:\Users\Migue y Chris\Desktop\Ejercicios\aspirantes-mir-javascript>
 *  History restored 

Windows PowerShell
Copyright (C) Microsoft Corporation. Todos los derechos reservados.

PS C:\Users\Migue y Chris\Desktop\Ejercicios> cd aspirantes-mir-javascript
PS C:\Users\Migue y Chris\Desktop\Ejercicios\aspirantes-mir-javascript> git branch develop
PS C:\Users\Migue y Chris\Desktop\Ejercicios\aspirantes-mir-javascript> git checkout develop
Switched to branch 'develop'
PS C:\Users\Migue y Chris\Desktop\Ejercicios\aspirantes-mir-javascript> md js-3


    Directorio: C:\Users\Migue y Chris\Desktop\Ejercicios\aspirantes-mir-javascript


Mode                LastWriteTime         Length Name
----                -------------         ------ ----
d-----     15/03/2023  6:32 p. m.                js-3


PS C:\Users\Migue y Chris\Desktop\Ejercicios\aspirantes-mir-javascript> cd js-3
PS C:\Users\Migue y Chris\Desktop\Ejercicios\aspirantes-mir-javascript\js-3> node console.log(pedro.edad)
pedro.edad : El término 'pedro.edad' no se reconoce como nombre de un cmdlet, función, archivo de script o programa ejecutable. 
Compruebe si escribió correctamente el nombre o, si incluyó una ruta de acceso, compruebe que dicha ruta es correcta e inténtelo 
de nuevo.
En línea: 1 Carácter: 18
+ node console.log(pedro.edad)
+                  ~~~~~~~~~~
    + CategoryInfo          : ObjectNotFound: (pedro.edad:String) [], CommandNotFoundException
    + FullyQualifiedErrorId : CommandNotFoundException
 
PS C:\Users\Migue y Chris\Desktop\Ejercicios\aspirantes-mir-javascript\js-3> node object1.js
30
PS C:\Users\Migue y Chris\Desktop\Ejercicios\aspirantes-mir-javascript\js-3> node object1.js
30
PS C:\Users\Migue y Chris\Desktop\Ejercicios\aspirantes-mir-javascript\js-3> node object1.js
30
PS C:\Users\Migue y Chris\Desktop\Ejercicios\aspirantes-mir-javascript\js-3> node object1.js
30
Pedro Perez
30
[ 'programar', 'squash', 'piano' ]
1.8
PS C:\Users\Migue y Chris\Desktop\Ejercicios\aspirantes-mir-javascript\js-3> node object1.js
30
nombre: Pedro Perez
edad: 30
hobbies: programar,squash,piano
estatura: 1.8
PS C:\Users\Migue y Chris\Desktop\Ejercicios\aspirantes-mir-javascript\js-3> node object1.js
30
nombre: Pedro Perez
edad: 30
hobbies: programar,squash,piano
estatura: 1.8
Hola, me llamo Pedro Perez
PS C:\Users\Migue y Chris\Desktop\Ejercicios\aspirantes-mir-javascript\js-3> node object2.js
Hola, me llamo undefined, tengo undefined años de edad y vivo en la ciudad de undefined me desempeño como undefined
undefined
PS C:\Users\Migue y Chris\Desktop\Ejercicios\aspirantes-mir-javascript\js-3> node object2.js
Hola, me llamo Miguel Camargo, tengo 32 años de edad y vivo en la ciudad de Santa Marta me desempeño como Ejecutivo de soporte
undefined
PS C:\Users\Migue y Chris\Desktop\Ejercicios\aspirantes-mir-javascript\js-3> node object2.js
Hola, me llamo Miguel Camargo, tengo 32 años de edad y vivo en la ciudad de Santa Marta me desempeño como Ejecutivo de soporte
undefined
PS C:\Users\Migue y Chris\Desktop\Ejercicios\aspirantes-mir-javascript\js-3> node object2.js
Hola, me llamo Miguel Camargo, tengo 32 años de edad y vivo en la ciudad de Santa Marta me desempeño como Ejecutivo de soporte
undefined
[ 'tenis de mesa', 'videojuegos', 'programacion' ]
PS C:\Users\Migue y Chris\Desktop\Ejercicios\aspirantes-mir-javascript\js-3> node object2.js
Hola, me llamo Miguel Camargo, tengo 32 años de edad y vivo en la ciudad de Santa Marta me desempeño como Ejecutivo de soporte
undefined
[ 'tenis de mesa', 'videojuegos', 'programacion' ]
PS C:\Users\Migue y Chris\Desktop\Ejercicios\aspirantes-mir-javascript\js-3> node object2.js
Hola, me llamo Miguel Camargo, tengo 32 años de edad y vivo en la ciudad de Santa Marta me desempeño como Ejecutivo de soporte
undefined
[ 'tenis de mesa', 'videojuegos', 'programacion' ]
PS C:\Users\Migue y Chris\Desktop\Ejercicios\aspirantes-mir-javascript\js-3> node object2.js
Hola, me llamo Miguel Camargo, tengo 32 años de edad y vivo en la ciudad de Santa Marta, me desempeño como Ejecutivo de soporte
undefined
[ 'tenis de mesa', 'videojuegos', 'programacion' ]
C:\Users\Migue y Chris\Desktop\Ejercicios\aspirantes-mir-javascript\js-3\object2.js:16
for (let i = 0; i < hobbies.length; i++){
                    ^

ReferenceError: hobbies is not defined
    at Object.<anonymous> (C:\Users\Migue y Chris\Desktop\Ejercicios\aspirantes-mir-javascript\js-3\object2.js:16:21)
    at Module._compile (node:internal/modules/cjs/loader:1254:14)
    at Module._extensions..js (node:internal/modules/cjs/loader:1308:10)
    at Module.load (node:internal/modules/cjs/loader:1117:32)
    at Module._load (node:internal/modules/cjs/loader:958:12)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:81:12)
    at node:internal/main/run_main_module:23:47

Node.js v18.15.0
PS C:\Users\Migue y Chris\Desktop\Ejercicios\aspirantes-mir-javascript\js-3> node object2.js
Hola, me llamo Miguel Camargo, tengo 32 años de edad y vivo en la ciudad de Santa Marta, me desempeño como Ejecutivo de soporte
undefined
[ 'tenis de mesa', 'videojuegos', 'programacion' ]
tenis de mesa
videojuegos
programacion
PS C:\Users\Migue y Chris\Desktop\Ejercicios\aspirantes-mir-javascript\js-3> node object3.js
undefined
PS C:\Users\Migue y Chris\Desktop\Ejercicios\aspirantes-mir-javascript\js-3> node object3.js
{ nombre: 'Pan', cantidad: '2' }
PS C:\Users\Migue y Chris\Desktop\Ejercicios\aspirantes-mir-javascript\js-3> node object3.js
Pan
PS C:\Users\Migue y Chris\Desktop\Ejercicios\aspirantes-mir-javascript\js-3> node object3.js
Pan
3
PS C:\Users\Migue y Chris\Desktop\Ejercicios\aspirantes-mir-javascript\js-3> cd..
PS C:\Users\Migue y Chris\Desktop\Ejercicios\aspirantes-mir-javascript> git add .
PS C:\Users\Migue y Chris\Desktop\Ejercicios\aspirantes-mir-javascript> git commit -m "solucion a los ejercicios de js"
[develop d3a7168] solucion a los ejercicios de js
 3 files changed, 47 insertions(+)
 create mode 100644 js-3/object1.js
 create mode 100644 js-3/object2.js
 create mode 100644 js-3/object3.js
PS C:\Users\Migue y Chris\Desktop\Ejercicios\aspirantes-mir-javascript> git branch main
fatal: A branch named 'main' already exists.
PS C:\Users\Migue y Chris\Desktop\Ejercicios\aspirantes-mir-javascript> git checkout main
Switched to branch 'main'
Your branch is up to date with 'origin/main'.
PS C:\Users\Migue y Chris\Desktop\Ejercicios\aspirantes-mir-javascript> git merge develop
Updating c88d7d0..d3a7168
Fast-forward
 js-3/object1.js | 19 +++++++++++++++++++
 js-3/object2.js | 19 +++++++++++++++++++
 js-3/object3.js |  9 +++++++++
 3 files changed, 47 insertions(+)
 create mode 100644 js-3/object1.js
 create mode 100644 js-3/object2.js
 create mode 100644 js-3/object3.js
PS C:\Users\Migue y Chris\Desktop\Ejercicios\aspirantes-mir-javascript> git push -u origin main
Enumerating objects: 7, done.
Counting objects: 100% (7/7), done.
Delta compression using up to 2 threads
Compressing objects: 100% (6/6), done.
Writing objects: 100% (6/6), 1.08 KiB | 138.00 KiB/s, done.
Total 6 (delta 1), reused 0 (delta 0), pack-reused 0
remote: Resolving deltas: 100% (1/1), completed with 1 local object.
To https://github.com/Miguect/aspirantes-mir-javascript.git
   c88d7d0..d3a7168  main -> main
Branch 'main' set up to track remote branch 'main' from 'origin'.
PS C:\Users\Migue y Chris\Desktop\Ejercicios\aspirantes-mir-javascript> git branch -d develop
Deleted branch develop (was d3a7168).