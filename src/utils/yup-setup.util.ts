import { setLocale, array, addMethod } from 'yup';
import printValue from 'yup/lib/util/printValue';

import { camelCaseToTitleCase } from '@/utils';

import type { ArraySchema, AnySchema } from 'yup';
import type { MessageParams } from 'yup/lib/types';

/**
 * @function - Checks if there is any duplicates
 * @param this ArraySchema<AnySchema<T>>
 * @param mapper (a: T) => a
 * @param message string
 * @returns boolean
 */
function withHasNoDuplicates<T>(
  this: ArraySchema<AnySchema<T>>,
  mapper = (a: T) => a,
  message = 'May not have duplicates',
) {
  return this.test('hasNoDuplicates', message, (list) => {
    return list?.length === new Set(list?.map(mapper)).size;
  });
}

addMethod(array, 'hasNoDuplicates', withHasNoDuplicates);

/**
 * @function - Re-defines Yup error messages, so that field name (path) are in Title case
 */
export const setYupLocale = () => {
  setLocale({
    mixed: {
      default: ({ path }: MessageParams) => {
        const titleCasePath = camelCaseToTitleCase(path);
        return `${titleCasePath} is invalid`;
      },
      required: ({ path }: MessageParams) => {
        const titleCasePath = camelCaseToTitleCase(path);
        return `${titleCasePath} is a required field`;
      },
      oneOf: ({ path, values }: MessageParams & { values: unknown }) => {
        const titleCasePath = camelCaseToTitleCase(path);
        return `${titleCasePath} must be one of the following values: ${values}`;
      },
      notOneOf: ({ path, values }: MessageParams & { values: unknown }) => {
        const titleCasePath = camelCaseToTitleCase(path);
        return `${titleCasePath} must not be one of the following values: ${values}`;
      },
      notType: ({ path, type, value, originalValue }: MessageParams) => {
        const titleCasePath = camelCaseToTitleCase(path);
        const isCast = originalValue != null && originalValue !== value;

        return `${titleCasePath} must be a \`${type}\` type, but the final value was: \`${printValue(
          value,
          true,
        )}\`${isCast ? ` (cast from the value \`${printValue(originalValue, true)}\`).` : '.'}${
          value === null
            ? `\n If "null" is intended as an empty value be sure to mark the schema as \`.nullable()\``
            : ''
        }`;
      },
      defined: ({ path }: MessageParams) => {
        const titleCasePath = camelCaseToTitleCase(path);
        return `${titleCasePath} must be defined`;
      },
    },
    string: {
      length: ({ path, length }: MessageParams & { length: number }) => {
        const titleCasePath = camelCaseToTitleCase(path);
        return `${titleCasePath} must be exactly ${length} characters`;
      },
      min: ({ path, min }: MessageParams & { min: number }) => {
        const titleCasePath = camelCaseToTitleCase(path);
        return `${titleCasePath} must be at least ${min} characters`;
      },
      max: ({ path, max }: MessageParams & { max: number }) => {
        const titleCasePath = camelCaseToTitleCase(path);
        return `${titleCasePath} must be at most ${max} characters`;
      },
      matches: ({ path, regex }: MessageParams & { regex: RegExp }) => {
        const titleCasePath = camelCaseToTitleCase(path);
        return `${titleCasePath} must match the following: "${regex}"`;
      },
      email: ({ path }: MessageParams) => {
        const titleCasePath = camelCaseToTitleCase(path);
        return `${titleCasePath} must be a valid email`;
      },
      url: ({ path }: MessageParams) => {
        const titleCasePath = camelCaseToTitleCase(path);
        return `${titleCasePath} must be a valid URL`;
      },
      uuid: ({ path }: MessageParams) => {
        const titleCasePath = camelCaseToTitleCase(path);
        return `${titleCasePath} must be a valid UUID`;
      },
      trim: ({ path }: MessageParams) => {
        const titleCasePath = camelCaseToTitleCase(path);
        return `${titleCasePath} must be a trimmed string`;
      },
      lowercase: ({ path }: MessageParams) => {
        const titleCasePath = camelCaseToTitleCase(path);
        return `${titleCasePath} must be a lowercase string`;
      },
      uppercase: ({ path }: MessageParams) => {
        const titleCasePath = camelCaseToTitleCase(path);
        return `${titleCasePath} must be a upper case string`;
      },
    },
    number: {
      min: ({ path, min }: MessageParams & { min: number }) => {
        const titleCasePath = camelCaseToTitleCase(path);
        return `${titleCasePath} must be greater than or equal to ${min}`;
      },
      max: ({ path, max }: MessageParams & { max: number }) => {
        const titleCasePath = camelCaseToTitleCase(path);
        return `${titleCasePath} must be less than or equal to ${max}`;
      },
      lessThan: ({ path, less }: MessageParams & { less: number }) => {
        const titleCasePath = camelCaseToTitleCase(path);
        return `${titleCasePath} must be less than ${less}`;
      },
      moreThan: ({ path, more }: MessageParams & { more: number }) => {
        const titleCasePath = camelCaseToTitleCase(path);
        return `${titleCasePath} must be greater than ${more}`;
      },
      positive: ({ path }: MessageParams) => {
        const titleCasePath = camelCaseToTitleCase(path);
        return `${titleCasePath} must be a positive number`;
      },
      negative: ({ path }: MessageParams) => {
        const titleCasePath = camelCaseToTitleCase(path);
        return `${titleCasePath} must be a negative number`;
      },
      integer: ({ path }: MessageParams) => {
        const titleCasePath = camelCaseToTitleCase(path);
        return `${titleCasePath} must be an integer`;
      },
    },
    date: {
      min: ({ path, min }: MessageParams & { min: string | Date }) => {
        const titleCasePath = camelCaseToTitleCase(path);
        return `${titleCasePath} field must be later than ${min}`;
      },
      max: ({ path, max }: MessageParams & { max: string | Date }) => {
        const titleCasePath = camelCaseToTitleCase(path);
        return `${titleCasePath} field must be at earlier than ${max}`;
      },
    },
    boolean: {
      isValue: ({ path, value }: MessageParams & { value: unknown }) => {
        const titleCasePath = camelCaseToTitleCase(path);
        return `${titleCasePath} field must be ${value}`;
      },
    },
    object: {
      noUnknown: ({ path }: MessageParams) => {
        const titleCasePath = camelCaseToTitleCase(path);
        return `${titleCasePath} field has unspecified keys`;
      },
    },
    array: {
      min: ({ path, min }: MessageParams & { min: number }) => {
        const titleCasePath = camelCaseToTitleCase(path);
        return `${titleCasePath} field must have at least ${min} items`;
      },
      max: ({ path, max }: MessageParams & { max: number }) => {
        const titleCasePath = camelCaseToTitleCase(path);
        return `${titleCasePath} field must have less than or equal to ${max} items`;
      },
      length: ({ path, length }: MessageParams & { length: number }) => {
        const titleCasePath = camelCaseToTitleCase(path);
        return `${titleCasePath} must be have ${length} items`;
      },
    },
  });
};

setYupLocale();
