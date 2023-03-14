### Настройка сборки пакета:
1. Нужно получить ключ из https://git.git.net/-/profile/personal_access_tokens поставив флажок на пункте api
2. создаём .npmrc файл с содержимым токена (<GITLAB_TOKEN>) из шага 1
```
@module-common/ui-kit:registry=https://git.git.net/api/v4/projects/123/packages/npm/
//git.git.net/api/v4/projects/123/packages/npm/:_authToken=<GITLAB_TOKEN>
```
3. изменить версию пакеда в package.json  и выполнить npm publish или без npm publish закомитить изменение версии и запушить в гитлаб для сборки пакета в pipeline

### Установка в сторонний проект
1. npm i @module-common/ui-kit
2. и выполнить импорт компонента, например
```
import {Header} from '@module-common/ui-kit';
....
<Header label={'hello'}><strong>world</strong></Header>
.....
```
### Отладка компонента библиотеки без публикации пакета и изменение версии (локально)
1. изменить компонент, отладить в сторибуке (npm run storybook)
2. собираем либу/компоненты
```
npm run build
```
3. делаем ссылку в корне проекта либы
   ```npm link```
4. идём корень проекта где хотим иметь свежую сборку библиотеки и выполняем команду линковки, и после перезапускаем проект
   ```npm link @module-common/ui-kit```
5. выполяем отвязку от локального пакета если нужно
```
npm unlink
```