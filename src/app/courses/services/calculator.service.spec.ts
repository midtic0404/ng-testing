import { CalculatorService } from "./calculator.service";
import { LoggerService } from "./logger.service";
import { TestBed } from "@angular/core/testing";

describe('Calculator Service', () => {

  let calculator: CalculatorService;
  let loggerSpy: any;

  beforeEach(function() {
    loggerSpy = jasmine.createSpyObj('LoggerService', ['log']);

    TestBed.configureTestingModule({
      providers: [
        CalculatorService,
        {provide: LoggerService, useValue: loggerSpy}
      ]
    })

    calculator = TestBed.get(CalculatorService);
  });


  it('should add two number', () => {
    const result = calculator.add(2, 2);
    expect(result).toBe(4);
    expect(loggerSpy.log).toHaveBeenCalledTimes(1);
  });

  it('should subtract two numbers', () => {
    const result = calculator.subtract(2, 2);
    expect(result).toBe(0);
    expect(loggerSpy.log).toHaveBeenCalledTimes(1);
  });

});
