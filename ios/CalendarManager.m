//
//  CalendarManager.m
//  rnAndN
//
//  Created by Shaoting Zhou on 2017/2/10.
//  Copyright © 2017年 Facebook. All rights reserved.
//

#import "CalendarManager.h"
@implementation CalendarManager

RCT_EXPORT_MODULE();

//  清理缓存
RCT_EXPORT_METHOD(cleanCache:(RCTResponseSenderBlock)callback)
{
  NSURLCache *httpCache = [NSURLCache sharedURLCache];
  [httpCache removeAllCachedResponses];
  NSUInteger cache = [httpCache currentDiskUsage];
  callback(@[[NSNull null],@(cache)]);
}

 RCT_EXPORT_METHOD(cacheSize:(RCTResponseSenderBlock)callback)
 {
   NSURLCache *httpCache = [NSURLCache sharedURLCache];
   NSUInteger cache = [httpCache currentDiskUsage];
   callback(@[[NSNull null],@(cache)]);
 }
@end
