#!/bin/bash

# Обновление main ветки
git checkout main
git pull origin main

# Список всех веток, кроме main
branches=$(git branch -r | grep -v 'main' | sed 's/origin\///')

for branch in $branches; do
  git checkout $branch
  git pull origin $branch
  git merge main
  git push origin $branch
done

# Возврат на main ветку в конце
git checkout main
