// TIPOS DE DATOS EN JAVASCRIPT

// PRIMITIVOS

// Number
// String
// Boolean
// Undefined
// Null


// DE REFERENCIA
// Array
// Object
// Function
// Class

// REPRESENTACIÓN DE MEMORIA EN JAVASCRIPT
//
// ┌─────────────────────────────────────┐
// │           STACK (Pila)              │
// ├─────────────────────────────────────┤
// │  age: 25        (Number)            │
// │  active: true   (Boolean)           │
// │  name: 0x1001   (Referencia)        │
// │  arr: 0x2001    (Referencia)        │
// └─────────────────────────────────────┘
//
// ┌─────────────────────────────────────┐
// │           HEAP (Montículo)          │
// ├─────────────────────────────────────┤
// │  0x1001: "Axel" (String)            │
// │  0x2001: [1,2,3] (Array)            │
// │  0x3001: {x:10, y:20} (Object)      │
// │  0x4001: function() {} (Function)   │
// └─────────────────────────────────────┘
//
// PRIMITIVOS → Almacenados en STACK (menor consumo)
// REFERENCIA → Valor en HEAP, referencia en STACK