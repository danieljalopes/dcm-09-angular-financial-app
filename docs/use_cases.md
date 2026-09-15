Phase 0: Creating Project Structure
Technical Goal: Create an Angular Project, Add a Template, Create Initial Structure

Phase 1: Foundation & Interface (Week 1)
Technical Goal: Master Standalone Components, Control Flow Directives (@if, @for), Data Binding, and Data Models.

* **UC01 – View Balance Summary (Static)**
* **Description:** The user accesses the dashboard and views the Total Balance, Income, and Expense cards loaded with mock test data.
* **Angular Concepts:** `input()`, Interpolation `{{ value }}`, `DatePipe`, `CurrencyPipe`.


* **UC02 – List Recent Transactions**
* **Description:** Display a table showing the history of recent transactions.
* **Angular Concepts:** Control flow `@for` loop syntax with `@empty` block.


* **UC03 – Toggle Dark Mode**
* **Description:** The user clicks a button in the Header to switch the UI theme between Light and Dark mode.
* **Angular Concepts:** Property Binding `[class.dark]`, Event Binding `(click)`.



---

Phase 2: Forms & Business Logic (Week 2)
Technical Goal: Master Reactive Forms, Custom Validations, Services, and Dependency Injection.

* **UC04 – Register New Transaction**
* **Description:** The user fills out a form (Description, Amount, Type: Income/Expense, Category, and Date) and adds a new record to the list.
* **Angular Concepts:** `ReactiveFormsModule`, `FormBuilder`, `Validators.required`, `Validators.min`.


* **UC05 – Validate Input Data**
* **Description:** Prevent form submission if the amount is less than or equal to zero or if the date is in the future, displaying styled error messages.
* **Angular Concepts:** Custom Angular validations, form state control (`invalid`, `touched`).


* **UC06 – Delete Transaction**
* **Description:** The user clicks the delete icon on a table row, removing the transaction from the application state.
* **Angular Concepts:** Component communication via `output()` or directly via Service.



---

Phase 3: Advanced Reactivity & State (Week 3)
Technical Goal: Master Angular Signals, `computed()`, `effect()`, and Local Persistence.

* **UC07 – Recalculate Balance Dynamically**
* **Description:** Whenever a transaction is created or deleted, the Total Balance, Income, and Expense cards update instantly without reloading the page.
* **Angular Concepts:** `signal()`, `computed()` for real-time derived values.


* **UC08 – Filter Transactions by Category/Type**
* **Description:** The user selects a filter (e.g., "Expenses" only or "Food" category) and the table updates reactively.
* **Angular Concepts:** Integration of multiple dependent Signals.


* **UC09 – Persist Data in LocalStorage**
* **Description:** Ensure that refreshing the page (F5) or closing the browser does not lose user-created transactions.
* **Angular Concepts:** `effect()` to sync Signal state changes with `window.localStorage`.



---

Phase 4: API Integration & Routing (Week 4)
Technical Goal: Master `HttpClient`, Observables (RxJS), Error Handling, and Angular Router.

* **UC10 – Convert Balance Currency**
* **Description:** The user selects a target currency (USD, EUR, GBP) from a dropdown, converting the Total Balance using current exchange rates.
* **Angular Concepts:** `HttpClient`, external REST API consumption, RxJS operators (`switchMap`, `catchError`).


* **UC11 – Navigate Between Pages (Dashboard vs. Reports)**
* **Description:** The user uses the Sidebar to switch between the main Dashboard page and a dedicated Financial Reports page.
* **Angular Concepts:** `provideRouter`, `<router-outlet>`, `routerLink`, `routerLinkActive`.