# UI Audit Checklist (Based on copilot-instructions.md)

## File Header Comments (`// file path to app.jsx: ...`)

-   [ ] `c:\Users\cjord\Desktop\JadesBrowBeauty\waxing-website\JadesBrowBeauty\src\components\Services\ServicesComponent.jsx`: Missing top-level file path comment.
-   [ ] `c:\Users\cjord\Desktop\JadesBrowBeauty\waxing-website\JadesBrowBeauty\src\components\Services\Services.jsx`: Missing top-level file path comment.
-   [ ] `c:\Users\cjord\Desktop\JadesBrowBeauty\waxing-website\JadesBrowBeauty\src\components\Services\ServiceItem.jsx`: Missing top-level file path comment.
-   [ ] `c:\Users\cjord\Desktop\JadesBrowBeauty\waxing-website\JadesBrowBeauty\src\components\Services\ServiceCard.jsx`: Missing top-level file path comment.
-   [ ] `c:\Users\cjord\Desktop\JadesBrowBeauty\waxing-website\JadesBrowBeauty\src\components\Nav\NavMenu.jsx`: Missing top-level file path comment.
-   [ ] `c:\Users\cjord\Desktop\JadesBrowBeauty\waxing-website\JadesBrowBeauty\src\components\Button\Button.jsx`: Missing top-level file path comment.

## Color Values (Non-LCH)

-   [ ] `c:\Users\cjord\Desktop\JadesBrowBeauty\waxing-website\JadesBrowBeauty\src\components\Services\Services.css`:
    -   `h2.italianno-regular`: Uses `rgba(0, 0, 0, 0.904)`. Should be `lch(0 0 0 / 0.904)`.
    -   `.service-item:active`: Uses `rgba(0, 0, 0, 0.15)`. Should be `lch(0 0 0 / 0.15)`.

## String Quotes (Double Quotes in JSX/JS)

-   [ ] `c:\Users\cjord\Desktop\JadesBrowBeauty\waxing-website\JadesBrowBeauty\src\App.jsx`: Uses double quotes for `title` prop on `FuturisticSidebar`.
-   [ ] `c:\Users\cjord\Desktop\JadesBrowBeauty\waxing-website\JadesBrowBeauty\src\components\FuturisticSidebar\SidebarDemo.jsx`: Uses double quotes for `title` prop on `FuturisticSidebar`.
-   [ ] `c:\Users\cjord\Desktop\JadesBrowBeauty\waxing-website\JadesBrowBeauty\src\components\FuturisticSidebar\FuturisticSidebar.jsx`: Uses double quotes for default `title` prop and `alt` attribute.

## Other Notes

-   TailwindCSS: No violations found.
-   Inline Styles: No violations found.
-   Responsiveness: Basic responsiveness implemented via media queries and flexbox. Seems compliant.
-   Component Structure: Components are functional. Seems compliant.
