var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Component, Input, HostBinding, ChangeDetectionStrategy } from '@angular/core';
import { animate, trigger, style, state, transition } from '@angular/animations';
var TooltipBox = (function () {
    function TooltipBox(elementRef, rnd) {
        var _this = this;
        this.elementRef = elementRef;
        this.rnd = rnd;
        this.fadeState = 'invisible';
        this.init = new Promise(function (resolve) {
            _this.initResolve = resolve;
        });
    }
    Object.defineProperty(TooltipBox.prototype, "arrow", {
        set: function (side) {
            this.rnd.setElementClass(this.getNativeElement(), 'has-arrow', true);
            this.rnd.setElementClass(this.getNativeElement(), 'arrow-' + side, true);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TooltipBox.prototype, "posTop", {
        set: function (val) {
            this.rnd.setElementStyle(this.getNativeElement(), 'top', val + 'px');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TooltipBox.prototype, "posLeft", {
        set: function (val) {
            this.rnd.setElementStyle(this.getNativeElement(), 'left', val + 'px');
        },
        enumerable: true,
        configurable: true
    });
    TooltipBox.prototype.getNativeElement = function () {
        return this.elementRef.nativeElement;
    };
    TooltipBox.prototype.ngAfterViewInit = function () {
        this.initResolve();
    };
    __decorate([
        HostBinding('@fade')
    ], TooltipBox.prototype, "fadeState", void 0);
    __decorate([
        Input()
    ], TooltipBox.prototype, "text", void 0);
    __decorate([
        Input()
    ], TooltipBox.prototype, "arrow", null);
    __decorate([
        Input()
    ], TooltipBox.prototype, "posTop", null);
    __decorate([
        Input()
    ], TooltipBox.prototype, "posLeft", null);
    TooltipBox = __decorate([
        Component({
            selector: 'tooltip-box',
            template: '{{ text }}',
            animations: [
                trigger('fade', [
                    state('visible', style({ opacity: 1 })),
                    state('invisible', style({ opacity: 0 })),
                    transition('visible <=> invisible', animate('300ms linear'))
                ])
            ],
            styles: [
                "\n          :host {\n              background-color: rgba(0,0,0,0.8);\n              color: white;\n              display: inline-block;\n              position: fixed;\n              padding: 15px 25px;\n              font-size: 15px;\n          }\n    ",
                "\n          :host.has-arrow:before {\n              content: '';\n              border: 5px solid transparent;\n              position: absolute;\n              width: 0;\n              height: 0;\n          }\n    ",
                ':host.has-arrow.arrow-top:before { border-bottom: 5px solid rgba(0,0,0,0.8); top: -10px; }',
                ':host.has-arrow.arrow-bottom:before { border-top: 5px solid rgba(0,0,0,0.8); bottom: -10px; }',
                ':host.has-arrow.arrow-right:before { border-left: 5px solid rgba(0,0,0,0.8); right: -10px; }',
                ':host.has-arrow.arrow-left:before { border-right: 5px solid rgba(0,0,0,0.8); left: -10px; }'
            ],
            changeDetection: ChangeDetectionStrategy.OnPush
        })
    ], TooltipBox);
    return TooltipBox;
}());
export { TooltipBox };
//# sourceMappingURL=tooltip-box.component.js.map