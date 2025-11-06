# Fixes Needed for ExamplesToolbar.tsx

## Problem
Red/orange strokes are showing at the bottom of symptom rows from swipe action buttons bleeding through, and there are unwanted border artifacts around the rounded corners.

## Required Changes

### 1. Line 1043 - Add overflow-hidden
**Current:**
```tsx
<div className="relative w-full h-[60px]">
```

**Should be:**
```tsx
<div className="relative w-full h-[60px] overflow-hidden">
```

### 2. Line 827 - Remove separator from TitleAndTrailingAccessories
**Remove this line:**
```tsx
{!isLast && <div aria-hidden="true" className="absolute border-[0px_0px_0.333px] border-[rgba(84,84,86,0.34)] border-solid bottom-[-0.33px] left-0 pointer-events-none right-0 top-0" />}
```

### 3. Line 876 - Remove separator from Comment TitleAndAccessories  
**Remove this line:**
```tsx
{!isLast && <div aria-hidden="true" className="absolute border-[0px_0px_0.333px] border-[rgba(84,84,86,0.34)] border-solid bottom-[-0.33px] left-0 pointer-events-none right-0 top-0" />}
```

###4. Line 1122 - Replace separator with clean divider
**Current:**
```tsx
{!isLast && <div aria-hidden="true" className="absolute border-[0px_0px_0.33px] border-[rgba(84,84,86,0.34)] border-solid bottom-[-0.33px] left-0 pointer-events-none right-0 top-0" />}
```

**Should be:**
```tsx
{!isLast && (
  <div className="h-[0.5px] w-full bg-[rgba(60,60,67,0.29)]" style={{ marginLeft: '20px' }} />
)}
```

## Summary
These changes will:
1. Contain swipe buttons within the row (no color bleed)
2. Remove duplicate/overlapping separators that create artifacts
3. Add a single clean divider aligned with content indentation
