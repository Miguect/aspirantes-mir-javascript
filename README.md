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