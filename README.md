# <h1 align="center">$\mathbb{\color{#307eed}{\Huge Проект{:} \ «Путешествия \ по \ России»}}$</h1>

___

# $\mathfrak{\color{#05a2a2}{Описание \ проекта{:}}}$

*О проекте:*

1. Данный проект создавался с целью закрепить пройденный материал и отработать навыки, полученные в теоретической части спринта, и в особенности по части создания интерфейсов для разных устройств.

2. Данный проект представляет собой одностраничный сайт, состоящий из 7 блоков. В эти блоки входят:
    * шапка сайта;
    * основное содержимое страницы – 5 секций;
    * подвал сайта.

3. Файловая структура проекта создана по методологии **БЭМ Nested**. В проекте была использована **продвинутая семантика языка HTML**. Была отработана **адаптивная вёрстка**, а также работа с макетом в **Figma**.

4. Использованы следующие технологии:
    * технология *«flex»*: применены разные значения свойства *flex-direction*, заданы различные направления по главной и поперечной осями контейнеров;
    * технология *Grid Layout*: созданы сетки при помощи свойств *grid-template-columns* и *grid-template-rows*, а также грид-области при помощи свойства *grid-template-areas*;
    * позиционирование элементов: абсолютное позиционирование было применено в секции cover;
    * применены псевдоклассы *:hover* и *:last-of-type* и псевдоэлемент *::before*;
    * использованы вендорные префиксы;
    * использованы CSS-директивы: для подключения файлов стилей - *@import*, подключены шрифты - *@font-face*, реализована адаптивность - *@media*;
    * сглаживание, рендеринг, а также свойство *text-size-adjust* для пропорционального изменения размера шрифта;
    * использованы свойства *opacity* и *transition* для ссылок в состоянии наведения курсора.

### $\Huge{\color{#05a2a2}{Ссылка \ страницы \ на \ GitHub \ Pages{:}}}$

https://21julia.github.io/russian-travel/

----

## Доработка проекта:

*В планы по доработке проекта входят:*

1. JavaScript: создать функции открытия и закрытия попапов для отображения картинок в большом размере, через события *'click'*, *'mousedown'* и *'keydown'* при помощи метода *addEventListener*.
