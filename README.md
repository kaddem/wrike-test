# student-startpack
**Простой сборщик на less для студентов**
Version 1.0.3

## Требования

Для работы необходимы

* [Node.js](http://nodejs.org) `последней версии`
* [Gulp](http://gulpjs.com/): `[sudo] npm install -g gulp`

## Начало работы

Клонируем в текущую папку (точка в конце через пробел):
```
$ git clone git@github.com:kaddem/student-startpack.git .
```

Избавляемся от привязки к удаленному репозиторию:
```
git remote rm origin
```

Ставим зависимости:
```
npm install
```

## Запуск

В консоли выполняем команду:
```
gulp serve
```
* Поднимается localhost
* В браузере автоматом открывается index.html
* Происходит отслеживание изменений в less файлах и их пересборка
* Происходит отслеживание изменений в html файлах
* При изменении происхожит перезагрузка страницы

## Структура папок и файлов
```
project
├───src
│   └───styles
│       ├───blocks (стили блоков)
│       │   ├───_header.less
│       │   ├───_nav.less
│       │   └───etc.
│       │
│       ├───common (общие стили)
│       │   ├───_fonts.less
│       │   ├───_variables.less
│       │   └───etc.
│       │
│       └───style.less
│
└───www
    ├───fonts
    │   ├───font.woff2
    │   └───font.woff
    │
    ├───img
    │   ├───img.jpg
    │   └───etc.
    │
    ├───scripts
    │   ├───script.js
    │   └───etc.
    │
    ├───style
    │   ├───style.css (собранный из less файлов - его не трогаем)
    │   └───etc.
    │
    ├───index.html
    ├───page1.html
    └───etc.
```

## Версии
* 1.0.3 - написан readme.md, добавлены сообщения об ошибках во всплывающем окне.
* 1.0.2 - добавлены читабельные сообщения об ошибках в консоли. Плагин - gulp-notify
* 1.0.1 - изменения в .gitignore
* 1.0.0 - создание сборки