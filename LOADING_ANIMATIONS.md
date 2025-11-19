# Loading Animations System

This document describes the comprehensive loading animation system implemented in the skyrydr application.

## 🎯 Overview

The loading animation system provides a consistent and engaging user experience during data loading, page transitions, and async operations. It includes multiple animation variants, loading states, and smooth transitions.

## 📦 Components

### 1. LoadingSpinner (`/src/components/ui/loading-spinner.jsx`)

A versatile spinner component with multiple animation variants:

- **default**: Classic rotating spinner
- **pulse**: Pulsing animation with opacity changes
- **bounce**: Bouncing animation
- **dots**: Three animated dots
- **car**: Car-themed spinner with dual rotating rings

**Usage:**
```jsx
import { LoadingSpinner } from "@/components/ui/loading-spinner";

<LoadingSpinner variant="car" size="lg" />
```

**Props:**
- `variant`: Animation style ("default" | "pulse" | "bounce" | "dots" | "car")
- `size`: Spinner size ("sm" | "md" | "lg" | "xl")
- `className`: Additional CSS classes

### 2. PageLoader (`/src/components/ui/page-loader.jsx`)

Full-screen loading overlay with animated progress bar:

**Usage:**
```jsx
import { PageLoader } from "@/components/ui/page-loader";

<PageLoader 
  isLoading={isLoading} 
  variant="car"
  message="Preparing your journey..."
/>
```

**Props:**
- `isLoading`: Boolean to control visibility
- `variant`: Spinner variant to use
- `message`: Loading message text
- `overlay`: Whether to show backdrop overlay

### 3. LoadingButton (`/src/components/ui/loading-button.jsx`)

Button component with integrated loading state:

**Usage:**
```jsx
import { LoadingButton } from "@/components/ui/loading-button";

<LoadingButton
  isLoading={isSubmitting}
  loadingText="Processing..."
  onClick={handleSubmit}
>
  Submit Form
</LoadingButton>
```

### 4. EnhancedSkeleton (`/src/components/ui/enhanced-skeleton.jsx`)

Advanced skeleton loading with multiple animation patterns:

- **default**: Basic opacity animation
- **wave**: Wave shimmer effect
- **shimmer**: Gradient shimmer animation
- **pulse**: Scale pulsing effect
- **card**: Pre-built card skeleton
- **text-block**: Multi-line text skeleton

**Usage:**
```jsx
import { EnhancedSkeleton } from "@/components/ui/enhanced-skeleton";

<EnhancedSkeleton variant="card" className="h-32" />
<EnhancedSkeleton variant="text-block" />
```

## 🎛️ Context & Hooks

### LoadingContext (`/src/contexts/LoadingContext.jsx`)

Global loading state management:

```jsx
import { LoadingProvider, useLoading } from "@/contexts/LoadingContext";

// Wrap your app
<LoadingProvider>
  <App />
</LoadingProvider>

// Use in components
const { setLoading, isLoading } = useLoading();
```

### useAsyncLoading Hook (`/src/hooks/use-async-loading.jsx`)

Simplifies async operations with loading states:

```jsx
import { useAsyncLoading } from "@/hooks/use-async-loading";

const { execute, error } = useAsyncLoading('api-call');

const handleSubmit = async () => {
  try {
    await execute(apiCall, data);
  } catch (err) {
    console.error(err);
  }
};
```

### useLocalLoading Hook

Component-level loading without global context:

```jsx
import { useLocalLoading } from "@/hooks/use-async-loading";

const { isLoading, execute } = useLocalLoading();
```

## 🎨 CSS Animations

Custom CSS animations are defined in `/src/index.css`:

- `.loading-shimmer`: Shimmer effect
- `.loading-wave`: Wave animation
- `.loading-pulse-glow`: Glowing pulse effect
- `.loading-bounce`: Smooth bounce animation
- `.loading-rotate`: Rotation animation
- `.loading-scale`: Scale pulse animation

## 🚀 Implementation in HeroSection

The HeroSection component demonstrates comprehensive loading implementation:

1. **Initial Page Load**: Full-screen loader with car animation
2. **Video Loading**: Smooth opacity transition when video loads
3. **Content Loading**: Skeleton placeholders before content appears
4. **Staggered Animations**: Sequential loading of different elements

**Key Features:**
- Video load detection
- Content skeleton loading
- Smooth transitions between loading states
- Responsive loading indicators

## 📱 Usage Examples

### Basic Loading State
```jsx
const [isLoading, setIsLoading] = useState(true);

return (
  <>
    {isLoading ? (
      <LoadingSpinner variant="car" size="lg" />
    ) : (
      <YourContent />
    )}
  </>
);
```

### Form with Loading Button
```jsx
const [isSubmitting, setIsSubmitting] = useState(false);

const handleSubmit = async () => {
  setIsSubmitting(true);
  try {
    await submitForm();
  } finally {
    setIsSubmitting(false);
  }
};

return (
  <LoadingButton
    isLoading={isSubmitting}
    onClick={handleSubmit}
  >
    Submit
  </LoadingButton>
);
```

### Page with Skeleton Loading
```jsx
const [isLoading, setIsLoading] = useState(true);

return (
  <div>
    {isLoading ? (
      <div className="space-y-4">
        <EnhancedSkeleton variant="card" />
        <EnhancedSkeleton variant="text-block" />
      </div>
    ) : (
      <YourPageContent />
    )}
  </div>
);
```

## 🎯 Best Practices

1. **Consistent Timing**: Use consistent animation durations (0.3s for quick, 0.8s for smooth)
2. **Meaningful Messages**: Provide context-appropriate loading messages
3. **Progressive Loading**: Show skeleton content before full loading screens
4. **Accessibility**: Ensure animations respect `prefers-reduced-motion`
5. **Performance**: Use CSS animations over JavaScript when possible

## 🔧 Customization

### Adding New Spinner Variants
```jsx
// In LoadingSpinner component
const variants = {
  yourVariant: {
    animate: { /* your animation */ },
    transition: { /* your timing */ }
  }
};
```

### Custom Loading Messages
```jsx
const loadingMessages = {
  booking: "Processing your booking...",
  payment: "Securing your payment...",
  route: "Calculating optimal route..."
};
```

## 🚀 Performance Considerations

- Animations use `transform` and `opacity` for optimal performance
- Framer Motion provides hardware acceleration
- Loading states prevent unnecessary re-renders
- Skeleton loading improves perceived performance

## 📊 Demo Component

A comprehensive demo is available at `/src/components/demo/LoadingDemo.jsx` showcasing all loading animations and their usage patterns.

---

This loading animation system provides a professional, consistent, and engaging user experience throughout the skyrydr application.
