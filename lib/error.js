const SIGNALS = [
	{
	  name: 'SIGHUP',
	  number: 1,
	  action: 'terminate',
	  description: 'Terminal closed',
	  standard: 'posix',
	},
	{
	  name: 'SIGINT',
	  number: 2,
	  action: 'terminate',
	  description: 'User interruption with CTRL-C',
	  standard: 'ansi',
	},
	{
	  name: 'SIGQUIT',
	  number: 3,
	  action: 'core',
	  description: 'User interruption with CTRL-\\',
	  standard: 'posix',
	},
	{
	  name: 'SIGILL',
	  number: 4,
	  action: 'core',
	  description: 'Invalid machine instruction',
	  standard: 'ansi',
	},
	{
	  name: 'SIGTRAP',
	  number: 5,
	  action: 'core',
	  description: 'Debugger breakpoint',
	  standard: 'posix',
	},
	{
	  name: 'SIGABRT',
	  number: 6,
	  action: 'core',
	  description: 'Aborted',
	  standard: 'ansi',
	},
	{
	  name: 'SIGIOT',
	  number: 6,
	  action: 'core',
	  description: 'Aborted',
	  standard: 'bsd',
	},
	{
	  name: 'SIGBUS',
	  number: 7,
	  action: 'core',
	  description:
		'Bus error due to misaligned, non-existing address or paging error',
	  standard: 'bsd',
	},
	{
	  name: 'SIGEMT',
	  number: 7,
	  action: 'terminate',
	  description: 'Command should be emulated but is not implemented',
	  standard: 'other',
	},
	{
	  name: 'SIGFPE',
	  number: 8,
	  action: 'core',
	  description: 'Floating point arithmetic error',
	  standard: 'ansi',
	},
	{
	  name: 'SIGKILL',
	  number: 9,
	  action: 'terminate',
	  description: 'Forced termination',
	  standard: 'posix',
	  forced: true,
	},
	{
	  name: 'SIGUSR1',
	  number: 10,
	  action: 'terminate',
	  description: 'Application-specific signal',
	  standard: 'posix',
	},
	{
	  name: 'SIGSEGV',
	  number: 11,
	  action: 'core',
	  description: 'Segmentation fault',
	  standard: 'ansi',
	},
	{
	  name: 'SIGUSR2',
	  number: 12,
	  action: 'terminate',
	  description: 'Application-specific signal',
	  standard: 'posix',
	},
	{
	  name: 'SIGPIPE',
	  number: 13,
	  action: 'terminate',
	  description: 'Broken pipe or socket',
	  standard: 'posix',
	},
	{
	  name: 'SIGALRM',
	  number: 14,
	  action: 'terminate',
	  description: 'Timeout or timer',
	  standard: 'posix',
	},
	{
	  name: 'SIGTERM',
	  number: 15,
	  action: 'terminate',
	  description: 'Termination',
	  standard: 'ansi',
	},
	{
	  name: 'SIGSTKFLT',
	  number: 16,
	  action: 'terminate',
	  description: 'Stack is empty or overflowed',
	  standard: 'other',
	},
	{
	  name: 'SIGCHLD',
	  number: 17,
	  action: 'ignore',
	  description: 'Child process terminated, paused or unpaused',
	  standard: 'posix',
	},
	{
	  name: 'SIGCLD',
	  number: 17,
	  action: 'ignore',
	  description: 'Child process terminated, paused or unpaused',
	  standard: 'other',
	},
	{
	  name: 'SIGCONT',
	  number: 18,
	  action: 'unpause',
	  description: 'Unpaused',
	  standard: 'posix',
	  forced: true,
	},
	{
	  name: 'SIGSTOP',
	  number: 19,
	  action: 'pause',
	  description: 'Paused',
	  standard: 'posix',
	  forced: true,
	},
	{
	  name: 'SIGTSTP',
	  number: 20,
	  action: 'pause',
	  description: 'Paused using CTRL-Z or "suspend"',
	  standard: 'posix',
	},
	{
	  name: 'SIGTTIN',
	  number: 21,
	  action: 'pause',
	  description: 'Background process cannot read terminal input',
	  standard: 'posix',
	},
	{
	  name: 'SIGBREAK',
	  number: 21,
	  action: 'terminate',
	  description: 'User interruption with CTRL-BREAK',
	  standard: 'other',
	},
	{
	  name: 'SIGTTOU',
	  number: 22,
	  action: 'pause',
	  description: 'Background process cannot write to terminal output',
	  standard: 'posix',
	},
	{
	  name: 'SIGURG',
	  number: 23,
	  action: 'ignore',
	  description: 'Socket received out-of-band data',
	  standard: 'bsd',
	},
	{
	  name: 'SIGXCPU',
	  number: 24,
	  action: 'core',
	  description: 'Process timed out',
	  standard: 'bsd',
	},
	{
	  name: 'SIGXFSZ',
	  number: 25,
	  action: 'core',
	  description: 'File too big',
	  standard: 'bsd',
	},
	{
	  name: 'SIGVTALRM',
	  number: 26,
	  action: 'terminate',
	  description: 'Timeout or timer',
	  standard: 'bsd',
	},
	{
	  name: 'SIGPROF',
	  number: 27,
	  action: 'terminate',
	  description: 'Timeout or timer',
	  standard: 'bsd',
	},
	{
	  name: 'SIGWINCH',
	  number: 28,
	  action: 'ignore',
	  description: 'Terminal window size changed',
	  standard: 'bsd',
	},
	{
	  name: 'SIGIO',
	  number: 29,
	  action: 'terminate',
	  description: 'I/O is available',
	  standard: 'other',
	},
	{
	  name: 'SIGPOLL',
	  number: 29,
	  action: 'terminate',
	  description: 'Watched event',
	  standard: 'other',
	},
	{
	  name: 'SIGINFO',
	  number: 29,
	  action: 'ignore',
	  description: 'Request for process information',
	  standard: 'other',
	},
	{
	  name: 'SIGPWR',
	  number: 30,
	  action: 'terminate',
	  description: 'Device running out of power',
	  standard: 'systemv',
	},
	{
	  name: 'SIGSYS',
	  number: 31,
	  action: 'core',
	  description: 'Invalid system call',
	  standard: 'other',
	},
	{
	  name: 'SIGUNUSED',
	  number: 31,
	  action: 'terminate',
	  description: 'Invalid system call',
	  standard: 'other',
	},
]

const getRealtimeSignals = ()=>{
	const SIGRTMIN = 34
	const SIGRTMAX = 64
	
	const getRealtimeSignal = function (value, index) {
		return {
			name: `SIGRT${index + 1}`,
			number: SIGRTMIN + index,
			action: 'terminate',
			description: 'Application-specific signal (realtime)',
			standard: 'posix',
		}
	}

	const length = SIGRTMAX - SIGRTMIN + 1
	return Array.from({ length }, getRealtimeSignal)
}

const signalsByName = function () {
	const normalizeSignal = function ({
		name,
		number: defaultNumber,
		description,
		action,
		forced = false,
		standard,
	}) {
		const {
		signals: { [name]: constantSignal },
		} = constants
		const supported = constantSignal !== undefined
		const number = supported ? constantSignal : defaultNumber
		return { name, number, description, supported, action, forced, standard }
	}
	const getSignalByName = function ({
		name,
		number,
		description,
		supported,
		action,
		forced,
		standard,
	}) {
		return [
		name,
		{ name, number, description, supported, action, forced, standard },
		]
	}
	const realtimeSignals = getRealtimeSignals()
	const signals = [...SIGNALS, ...realtimeSignals].map(normalizeSignal)

	return Object.fromEntries(signals.map(getSignalByName))
}

// The above code comes from  https://github.com/ehmicky/human-signals

const getErrorPrefix = ({timedOut, timeout, errorCode, signal, signalDescription, exitCode, isCanceled}) => {
	if (timedOut) {
		return `timed out after ${timeout} milliseconds`;
	}

	if (isCanceled) {
		return 'was canceled';
	}

	if (errorCode !== undefined) {
		return `failed with ${errorCode}`;
	}

	if (signal !== undefined) {
		return `was killed with ${signal} (${signalDescription})`;
	}

	if (exitCode !== undefined) {
		return `failed with exit code ${exitCode}`;
	}

	return 'failed';
};

const makeError = ({
	stdout,
	stderr,
	all,
	error,
	signal,
	exitCode,
	command,
	escapedCommand,
	timedOut,
	isCanceled,
	killed,
	parsed: {options: {timeout}},
}) => {
	// `signal` and `exitCode` emitted on `spawned.on('exit')` event can be `null`.
	// We normalize them to `undefined`
	exitCode = exitCode === null ? undefined : exitCode;
	signal = signal === null ? undefined : signal;
	const signalDescription = signal === undefined ? undefined : signalsByName[signal].description;

	const errorCode = error && error.code;

	const prefix = getErrorPrefix({timedOut, timeout, errorCode, signal, signalDescription, exitCode, isCanceled});
	const execaMessage = `Command ${prefix}: ${command}`;
	const isError = Object.prototype.toString.call(error) === '[object Error]';
	const shortMessage = isError ? `${execaMessage}\n${error.message}` : execaMessage;
	const message = [shortMessage, stderr, stdout].filter(Boolean).join('\n');

	if (isError) {
		error.originalMessage = error.message;
		error.message = message;
	} else {
		error = new Error(message);
	}

	error.shortMessage = shortMessage;
	error.command = command;
	error.escapedCommand = escapedCommand;
	error.exitCode = exitCode;
	error.signal = signal;
	error.signalDescription = signalDescription;
	error.stdout = stdout;
	error.stderr = stderr;

	if (all !== undefined) {
		error.all = all;
	}

	if ('bufferedData' in error) {
		delete error.bufferedData;
	}

	error.failed = true;
	error.timedOut = Boolean(timedOut);
	error.isCanceled = isCanceled;
	error.killed = killed && !timedOut;

	return error;
};

module.exports = makeError