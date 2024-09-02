# Git 🤍


 Control de versiones
- https://www.atlassian.com/es/git/glossary

```md
git --version  
(Indica la versión instalada de Git)

git init 
(Inicia un repositorio en el directorio donde se ejecuta el comando)

git status 
(Inspeccionar repositorio Git)

git add . 
(Añade todos los archivos que se encuentran dentro del directorio)

git add <nombre del archivo>  
(Añade el archivo especificado al repositorio de Git)

git rm --cached <nombre del archivo>  
(Deja de monitorear o de hacer el seguimiento a dicho archivo)

-git commit -m "<comentario>"  
(Permite especificar, a modo de comentario, los cambios realizados en el arhivo o proyecto)

git config --global user.name "<nombre del usuario que está realizando los cambios>" 
(Para todos los proyectos que se relizarán)

git config --global user.email "<email del usuario que está realizando los cambios>" 
(Para todos los proyectos que se relizarán)

git config --local user.name "<nombre del usuario que está realizando los cambios>" 
(Solo para el proyeto actual)

git config --local user.email "<email del usuario que está realizando los cambios>" 
(Solo para el proyecto actual)

git log 
(Visualiza el historial de commits en varias líneas)

git log --oneline 
(Visualiza el historial de commits en una sola línea)

git log -p 
(Visualiza el historial de commits junto con los detalles de los cambios realizados en el código. Para salir de los detalles escribir :q)

git config user.name 
(Devuelve el nombre de la persona que realizó el commit)

git config user.email 
(Devuelve el correo de la persona que realizó el commit)

git init --bare 
(Crea un repositorio que no tendrá la working tree, o sea, no contendrá una copia de nuestros archivos. Como el repositorio servirá solo como servidor, para que otros miembros del equipo sincronicen sus trabajos, disminuimos espacio de almacenamiento de esta forma)

git remote 
(Muestra un listado de los repositorios remotos)

git remote add <escribir un nombre para el servidor local> <dirección del servidor remoto> 
Permite agregar un servidor remoto a un servidor local. De esta forma tendremos un link de nuestro repositorio local con el repositorio remoto)

git remote -v 
(Indica si el servidor local está apuntando hacia el servidor remoto)

git clone <dirección del repositorio> <nombre que deseo colocar al repositorio clonado> 
(Permite clonar un repositorio)

git push <nombre del servidor> <nombre del branch> 
(Publica nuestro branch del proyecto en el servidor local)

git remote rename <nombre actual del repositorio remoto> <nombre por el que se desea cambiar> 
(Permite cambiar el nombre de un repositorio)

git pull <nombre del servidor> <nombre del branch> 
(Copia el branch del proyecto publicado en el servidor)

git branch 
(Lista todas las branches o ramas del proyecto)

git branch <nombre del branch> 
(Permite crear una branch o rama del proyecto)

git checkout <nombre del branch> 
(Nos lleva hacia la branch o rama especificada)

git checkout -b <nombre del branch> 
(Crea una branch y nos lleva hacia ella)

git merge <nombre del branch> 
(Agrega los cambios realizados en el branch especificado a la rama del proyecto desde donde se ejecuta el comando)

git rebase <nombre del branch> 
(Agrega los cambios realizados en el branch especificado a la rama del proyecto desde donde se ejecuta el comando. Los commits de los cambios realizados en el branch se escribirán antes del último commit realizado en el proyecto. Este es un proceso lineal de merge)

git log --graph 
(Permite visualizar de forma gráfica los commits realizados)

git restore <nombre del archivo> 
(Deshace una modificación que aún no fue agregada al index o stage, o sea, antes de hacer git add)

git restore --staged <nombre del archivo> 
(Deshace una modificación después de agregarla, pero antes de commitearla)

git revert <id del commit al cual queremos regresar> 
(Deshace una modificación después de realizar el commit)

git stash 
(Almacena temporalmente las modificaciones que se realice al proyecto)

git stash list 
(Permite visualizar una lista de los cambios realizados en el stash)

git stash drop <número>
(Elimina un elemento determinado del stash)

git stash pop
(Aplica y elimina el último cambio que se agregó al stash)

git diff 
(Permite visualizar las modificaciones realizadas en determinado código)

git diff <hash inicio>..<hash de fin> 
(Muestra los cambios realizados desde el commit de inicio al commit de fin)

git tag -a <nombre de la etiqueta ejemplo: v0.1.0> 
(Genera una release del programa) 
```


![image](https://github.com/user-attachments/assets/5bd7eb2c-653e-49b7-b2bd-889cebd64787)

![image](https://github.com/user-attachments/assets/7cf5e2a7-7ec5-43b2-aba5-a521fbe2966d)

