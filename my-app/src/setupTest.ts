import '@testing-library/jest-dom';
import { TextEncoder, TextDecoder } from 'util';

// Assign to globalThis instead of global for compatibility
(globalThis as any).TextEncoder = TextEncoder;
(globalThis as any).TextDecoder = TextDecoder;

