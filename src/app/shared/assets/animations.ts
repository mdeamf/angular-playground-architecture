import { animate, style, transition, trigger } from "@angular/animations";

/** Route animation */
export const routeStateTrigger = trigger("routeState", [
  transition("*<=>*", [
    style({ opacity: 0 }),
    animate("0.5s", style({ opacity: 1 })),
  ]),
]);
