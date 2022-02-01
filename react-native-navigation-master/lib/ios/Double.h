#import "Param.h"

@interface Double : Param

+ (instancetype)withValue:(double)value;

- (double)get;

- (double)withDefault:(double)defaultValue;

@end
